import axios from "axios";
import { Sub, SubsResponseApi } from "../types";

export const getAllSubs = () => {
  return fetchSubs().then(mapFromApiToSubs);
};

const fetchSubs = async (): Promise<SubsResponseApi> => {
  // return fetch("https://apimocha.com/subs-app-ts/subs")
  // .then(res => res.json())
  const res = await axios.get("https://apimocha.com/subs-app-ts/subs");
  return res.data;
};

const mapFromApiToSubs = (apiRes: SubsResponseApi): Sub[] => {
  return apiRes.map((subFromApi) => {
    const {
      nick,
      months: subMonths,
      profileUrl: avatar,
      description,
    } = subFromApi;

    return {
      nick,
      subMonths,
      avatar,
      description,
    };
  });
};
