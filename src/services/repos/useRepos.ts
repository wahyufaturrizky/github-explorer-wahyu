import { useQuery } from "react-query";
import { client } from "../client";

const fetchRepoList = async ({ query = {} }) =>
  client("/search/users", {
    params: {
      q: "",
      page: 1,
      per_page: 5,
      sort: "stars",
      order: "desc",
      ...query,
    },
  }).then((data) => data);

const useRepoList = ({ query = {}, options }: any) =>
  useQuery(["repo-list", query], () => fetchRepoList({ query }), {
    ...options,
  });

export { useRepoList };
