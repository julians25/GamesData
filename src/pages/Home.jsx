import { Grid } from "../components/Grid";

export function Home({category}) {
  return (
    <div>
      <Grid category={category}/>
    </div>
  );
}
