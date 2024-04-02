import ProductByIdPage from "@/views/ProductByIdView";

const ProductByIdView = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <ProductByIdPage />
    </>
  );
};

export default ProductByIdView;
