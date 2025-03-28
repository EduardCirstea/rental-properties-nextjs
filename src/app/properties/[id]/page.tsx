import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import connectDB from "@/config/database";
import Property from "@/models/Property";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import PropertyImages from "@/components/PropertyImages";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default async function PropertyPage({ params }: PropertyPageProps) {
  await connectDB();

  // Await the params object before accessing its properties
  const resolvedParams = await params;
  const id = resolvedParams.id;

  // Find the property by ID
  const property = await Property.findById(id).lean().exec();

  return (
    <>
      <PropertyHeaderImage image={(property as any)?.images[0]} />
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            href="/properties"
            className="text-blue-500 hover:text-blue-600 flex items-center"
          >
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
        </div>
      </section>
      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            {property ? (
              <PropertyDetails
                property={
                  Array.isArray(property)
                    ? (property[0] as Property)
                    : (property as Property)
                }
              />
            ) : (
              <p>Property not found</p>
            )}
          </div>
        </div>
      </section>
      <PropertyImages images={property.images} />
    </>
  );
}
