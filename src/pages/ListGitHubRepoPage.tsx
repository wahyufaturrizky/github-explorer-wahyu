import Button from "../component/Button";
import Input from "../component/Input";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "../interface/input.interface";

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
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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
          <p className="text-sm text-primary-gray my-4">
            Showing users for "{watch("userName")}"
          </p>
        )}

        <div className="bg-light-gray p-2 rounded justify-between flex items-center	">
          <p>asd</p>
          <p>asd</p>
        </div>
      </div>
    </div>
  );
};

export default ListGitHubRepoPage;
