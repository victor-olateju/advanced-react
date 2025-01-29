import { useUser } from "./context";

export function Blog() {
    const {user} = useUser()
  return (
    <div>
      <h2>What is Lorem ipsum?</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quam,
        nihil recusandae porro ab vitae consequatur quos sit dolor laborum eaque
        sequi accusamus necessitatibus voluptates, placeat deleniti quis
        temporibus fugiat.
      </p>
      <p>Written by: {user.name}</p>
    </div>
  );
}
