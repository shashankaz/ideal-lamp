import { MetaFunction } from "@remix-run/node";
import { Params } from "@remix-run/react";
import { Fade } from "react-awesome-reveal";

import { databases, ID } from "~/appwrite";
import Header from "~/components/Header";
import Slider from "~/components/Slider";
import PopularPackage from "~/components/PopularPackage";
import IndiaPackage from "~/components/IndiaPackage";
import InternationalPackage from "~/components/InternationalPackage";
import Gallery from "~/components/Gallery";
import Enquiry from "~/components/Enquiry";

export const meta: MetaFunction = () => {
  return [
    { title: "CPV Adventure Holidays" },
    {
      name: "description",
      content:
        "CPV Adventure Holidays is a travel company that offers a wide range of travel packages to various destinations in India and abroad.",
    },
  ];
};

export default function Index() {
  return (
    <>
      <Header />
      <Fade>
        <Slider />
        <PopularPackage />
        <IndiaPackage />
        <InternationalPackage />
        <Gallery />
        <Enquiry />
      </Fade>
    </>
  );
}

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const noteData = Object.fromEntries(formData);

  const result = await databases.createDocument(
    process.env.DATABASE_ID!,
    process.env.COLLECTION_ID!,
    ID.unique(),
    noteData
  );

  return null;
}

export const loader = async ({ params }: { params: Params }) => {
  return new Response(JSON.stringify(params), {
    headers: { "Content-Type": "application/json" },
  });
};
