import { CssBaseline } from "@material-ui/core";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
    
      <h4>Products</h4>
      <ul>
        <li>Product-1</li>
        <li>Product-2</li>
        <li>Product-3</li>
        <li>Product-4</li>
        <li>Product-5</li>
      </ul>
      <CssBaseline/>
    </Layout>
  )
}
