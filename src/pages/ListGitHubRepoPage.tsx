import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Accordion from "../component/Accordion";
import Button from "../component/Button";
import Card from "../component/Card";
import Input from "../component/Input";
import SkeletonList from "../component/SkeletonList";
import Text from "../component/Text";
import { Inputs } from "../interface/input.interface";
import { useRepoList } from "../services/repos/useRepos";

const ListGitHubRepoPage = () => {
  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<Inputs>({
      defaultValues: {
        userName: "",
        search: "",
      },
    });

  const {
    data: dataRepoList,
    isLoading: isLoadingRepoList,
    refetch: refetchRepoList,
  } = useRepoList({
    query: {
      q: watch("search"),
    },
    options: {
      onSuccess: () => {},
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setValue("search", data.userName);
    refetchRepoList();
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6 mb-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div className="mt-2">
              <Input
                placeholder="Enter username"
                type="text"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-blue sm:text-sm sm:leading-6"
                register={register}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              label="Search"
              className="flex w-full justify-center rounded-md bg-primary-blue px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue"
            />
          </div>
        </form>

        {watch("search") && (
          <Text
            className="text-sm text-primary-gray my-4"
            label={` Showing users for "${getValues("search")}"`}
          />
        )}

        {isLoadingRepoList ? (
          <SkeletonList />
        ) : (
          dataRepoList?.data?.items?.map((data: any, index: any) => {
            const { login, repos_url } = data;

            return (
              <Accordion
                className="bg-light-gray px-2 py-0 rounded justify-between flex items-center hover:opacity-40 cursor-pointer mb-4"
                labelHeader={login}
                key={index}
                classBody="pl-4 pt-2"
              >
                <ComponentCard repos_url={repos_url} />
              </Accordion>
            );
          })
        )}
      </div>
    </div>
  );
};

const ComponentCard = (props: any) => {
  const [stateRepo, setStateRepo] = useState([]);
  const [stateLoading, setStateLoading] = useState(false);

  useEffect(() => {
    const fetchRepo = async () => {
      try {
        setStateLoading(true);
        const res = await fetch(props.repos_url);
        const resJson = await res.json();

        setStateRepo(resJson);
      } catch (error) {
        setStateLoading(false);
      } finally {
        setStateLoading(false);
      }
    };

    fetchRepo();
  }, [props.repos_url]);

  return (
    <div>
      {stateLoading ? (
        <SkeletonList />
      ) : !stateRepo.length ? (
        <Text label="Empty repo" />
      ) : (
        stateRepo.map((data: any, index: any) => {
          const { name, stargazers_count, description } = data;
          return (
            <Card key={index} className="bg-lighter-gray p-1 mb-2">
              <div className="justify-between flex items-center">
                <Text className="font-bold" label={name} />
                <div className="flex">
                  <Text className="font-bold mr-2" label={stargazers_count} />
                  <Text className="font-bold" label="★" />
                </div>
              </div>

              <Text label={description} />
            </Card>
          );
        })
      )}
    </div>
  );
};

export default ListGitHubRepoPage;
