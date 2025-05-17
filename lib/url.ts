import qs from "query-string";

interface UrlQueryParams {
  params: string;
  key: string;
  value: string;
}

interface RemoveUrlQueryParams {
  params: string;
  keysToRemove: string[];
}

export const formUrlQuery = ({ params, key, value }: UrlQueryParams) => {
  const querryString = qs.parse(params);

  querryString[key] = value;
  return qs.stringifyUrl({
    url: window.location.pathname,
    query: querryString,
  });
};

export const removeKeysFromUrlQuery = ({
  params,
  keysToRemove,
}: RemoveUrlQueryParams) => {
  const querryString = qs.parse(params);

  keysToRemove.forEach((key) => {
    delete querryString[key];
  });

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: querryString,
    },
    { skipNull: true }
  );
};
