import { render, screen } from "@testing-library/react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Home from "./containers/home/home";

configure({ adapter: new Adapter() });

describe("Home component testing", () => {
  test("renders learn react link", () => {
    const wrapper = shallow(<Home />);
    console.log(wrapper.debug());
    render(<App />);
    const linkElement = screen.getByText(/Catalog/i);
    expect(linkElement).toBeInTheDocument();
  });
});
