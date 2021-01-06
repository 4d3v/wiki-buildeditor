import { Response } from 'express';

interface IData {
  [data: string]: any;
}

export default (
  res: Response,
  statusCode: number,
  status: string,
  data: IData,
  results: boolean = false
): void => {
  if (results)
    res.status(statusCode).json({
      status: status,
      results: data.length,
      data,
    });
  else
    res.status(statusCode).json({
      status: status,
      data,
    });
};
