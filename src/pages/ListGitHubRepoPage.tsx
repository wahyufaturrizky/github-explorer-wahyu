import Button from "../component/Button";
import Input from "../component/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../interface/input.interface";
import { ReactComponent as ExpandIcon } from "../assets/expand_more.svg";
import Text from "../component/Text";
import Accordion from "../component/Accordion";
import Card from "../component/Card";

const ListGitHubRepoPage = () => {
  const { register, handleSubmit, getValues, setValue, watch } =
    useForm<Inputs>({
      defaultValues: {
        isSearch: false,
        userName: "",
      },
    });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setValue("userName", data.userName);
    setValue("isSearch", true);
    console.log(data);
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

        {watch("isSearch") && (
          <Text
            className="text-sm text-primary-gray my-4"
            label={` Showing users for "${watch("userName")}"`}
          />
        )}

        <Accordion classBody="pl-4 pt-2">
          <Card className="bg-lighter-gray p-1 mb-2">
            <div className="justify-between flex items-center">
              <Text className="font-bold" label="asds" />
              <div className="flex">
                <Text className="font-bold mr-2" label="12" />
                <Text className="font-bold" label="★" />
              </div>
            </div>

            <Text label="asds" />
          </Card>
        </Accordion>
      </div>
    </div>
  );
};

export default ListGitHubRepoPage;
