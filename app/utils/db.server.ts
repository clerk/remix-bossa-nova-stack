import { getAuth } from '@clerk/remix/ssr.server'
import { createClient, SupabaseClient } from '@supabase/supabase-js'

export const getDB = async (
    request: Request,
): Promise<SupabaseClient | null> => {
    try {
        const { userId, getToken } = await getAuth(request)
        if (!userId) return null

        const secret = await getToken({ template: 'supabase' })
        if (!secret) return null

        const supabaseUrl = process.env.SUPABASE_URL || ''
        const supabaseKey = process.env.SUPABASE_ANON_KEY || ''

        const client = createClient(supabaseUrl, supabaseKey)
        client.auth.setAuth(secret)
        return client
    } catch (error) {
        return null
    }
}
