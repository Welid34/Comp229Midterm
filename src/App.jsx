import { useRef } from "react";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const categoryRef = useRef(null);
  const quantityRef = useRef(null);
  const priceRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    let values = {
      name: nameRef?.current?.value,
      desc: descRef?.current?.value,
      price: priceRef?.current?.value,
      category: categoryRef?.current?.value,
      quantity: quantityRef?.current?.value,
    };

    console.log(values);
  };
  return (
    <main className="w-full h-[100dvh] flex items-center justify-center">
      <div className="flex h-full w-full max-w-sm grow flex-col overflow-y-auto overflow-x-hidden">
        <div className="flex w-full flex-1 flex-col items-center justify-center">
          <div className="flex w-full flex-col items-center justify-center">
            <h3 className="text-xl font-medium text-blue-600">New Product</h3>

            <form onSubmit={handleSubmit} className="mt-10 w-full space-y-10">
              <Input ref={nameRef} label={"Name"} />
              <Input ref={descRef} label={"Description"} />
              <Input ref={categoryRef} label={"Category"} />
              <Input ref={quantityRef} label={"Quantity"} type="number" />
              <Input ref={priceRef} label={"Price"} type="number" />

              <div className="flex w-full items-center justify-between">
                <Button className={"bg-blue-600 text-white"} type="submit">
                  Submit
                </Button>
                <Button className={"bg-gray-300 text-gray-800"} type="reset">
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
