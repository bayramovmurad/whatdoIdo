import AddTodo from "@/components/shared/AddTodo";
import Todo from "@/components/shared/Todo";
import { prisma } from "@/utils/prisma";



const getData = async () => {
  const data = await prisma.todos.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return data;
}



const Home = async () => {
  const data = await getData();

  return (
    <div className="w-screen  flex justify-center flex-col items-center">
      <span className="text-3xl font-extrabold uppercase py-10">
        What Do I Do
      </span>

      <div className="flex justify-center flex-col items-center lg:w-[1000px] ">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-10 w-full">
          {
            data.map((todos, id) => (
              <div className="w-full" key={id}>
                <Todo todo={todos} />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;