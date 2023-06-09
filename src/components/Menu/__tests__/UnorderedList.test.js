import { render, screen } from "@testing-library/react";
import Menu from "../Menu";
import { List } from "../Menu";

const Products  = ({name, price, url}) => {
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <a href={`${url}`}></a>
        </div>
    );
}

const data = [
    {
        id: "Desert",
        name: "Desert",
        price: "12.99",
        url: "/"
    },
    {
        id: "Toys",
        name: "Toys",
        price: "10.99",
        url: "/"
    },
    {
        id: "Food",
        name: "Food",
        price: "5.99",
        url: "/"
    }
];

test("See if list items are returned and contain valid content", () => {


    render(<List data={data} Component={Products}/>);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(3);

    listItems.forEach((item, index) => {
      expect(item).toBeInTheDocument();
      expect(item.querySelector("h1")).toHaveTextContent(data[index].name);
      expect(item.querySelector("p")).toHaveTextContent(data[index].price);
    })

});

test("Check if list is displayed", () =>{
    render(<Menu data= {data} Component={Products}/>)
    const list = screen.getByRole("list")
    expect(list).toBeInTheDocument();
});