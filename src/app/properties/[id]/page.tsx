interface PropertyPageProps {
  params: {
    id: string;
  };
}

const PropertyPage = ({ params }: PropertyPageProps) => {
  return <div>Property page {params.id}</div>;
};

export default PropertyPage;
