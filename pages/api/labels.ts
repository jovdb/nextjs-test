// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export interface IGetLabelsSuccess {
  isSuccess: true;
  result: Record<string, string>
}

export interface IGetLabelsError {
  isSuccess: false;
  errorMessage: string;
}

export type IGetLabels = IGetLabelsSuccess | IGetLabelsError;

export default async function getLabels(
  req: NextApiRequest,
  res: NextApiResponse<IGetLabels>
) {

  // Simulate slow network call
  await new Promise((resolve) => setTimeout(resolve, 3000));

  let keys = req.query.key;
  if (!keys) {
    return res
      .status(500)
      .json({
        isSuccess: false,
        errorMessage: "No key specified",
      })
  }
  if (!Array.isArray(keys)) keys = [keys];

  res
    .status(200)
    .json({
      isSuccess: true,
      result: keys.reduce(
        (obj, key) => {
          if (key === "name") obj[key] = `Naam`
          else if (key === "address") obj[key] = `Adres`
          else obj[key] = `Translated ${key}`;
          return obj;
        },
        {} as Record<string, string>,
      ),
    });
}
