import React, { Suspense } from "react";
import Loading from "../components/Loading";

export async function getServerSideProps() {
  const data = await fetchData();

  return {
    props: { data },
  };
}

function PageContent({ data }) {
  return <div>{data}</div>;
}

export default function HomePage({ data }) {
  return (
    <Suspense fallback={<Loading />}>
      <PageContent data={data} />
    </Suspense>
  );
}
