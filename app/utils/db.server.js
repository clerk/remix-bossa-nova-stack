import { getAuth } from '@clerk/remix/ssr.server';
import faunadb from 'faunadb';

export const getClient = async (request) => {
  const { userId, getToken } = await getAuth(request);

  if (!userId) {
    return null;
  }

  const secret = await getToken({ template: 'fauna' });

  return new faunadb.Client({ secret });
};

export const q = faunadb.query;
