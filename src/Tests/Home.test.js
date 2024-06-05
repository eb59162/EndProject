import { render } from "react-dom"
import Home from "../OtherComponents/Home";

test('test HOme Componnent',()=>{
render(<Home/>)
const linkElement = screen.getByText(/Home/i);
expect(linkElement).toBeInTheDocument();

})