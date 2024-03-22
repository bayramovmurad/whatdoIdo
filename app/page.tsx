import { PrismaClient } from "@prisma/client";

import AddTodo from "@/components/shared/AddTodo";


const Home = async () => {
  return (
    <div className="w-screen py-20 flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase">
        What Do I Do
      </span>

      <div className="flex justify-center flex-col items-center w-[1000px] ">
        <AddTodo />
      </div>
    </div>
  );
};

export default Home;