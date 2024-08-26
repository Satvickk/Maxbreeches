import Table from "react-bootstrap/Table";

export default function QuotationTable() {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>Quotation Table</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Fabric & Accessories</th>
          <td>
            Wide range of technical fabrics and accessories: Cotton, Polyamide,
            Polyester, Spandex, Rayon, CoolMax blends.
          </td>
        </tr>
        <tr>
          <th>Colours</th>
          <td>
            Pantone colours as per your requirement; standard colours always in
            stock.
          </td>
        </tr>
        <tr>
          <th>MOQ</th>
          <td>50 pcs per colour, across sizes.</td>
        </tr>
        <tr>
          <th>Genders</th>
          <td>Mens, Womens, Kids, Infants.</td>
        </tr>
        <tr>
          <th>Sizes</th>
          <td>Country-specific sizes with customization options.</td>
        </tr>
        <tr>
          <th>Design and Detailing</th>
          <td>
            CAD designs tailored to your expectations by experienced designers.
          </td>
        </tr>
        <tr>
          <th>Customization</th>
          <td>Wide variety of customization options.</td>
        </tr>
        <tr>
          <th>Sample Process</th>
          <td>Proto, size, and preproduction samples available.</td>
        </tr>
        <tr>
          <th>Sample Lead Time</th>
          <td>1-2 weeks.</td>
        </tr>
        <tr>
          <th>Accessories</th>
          <td>Freedom to choose accessories, tailored to your needs.</td>
        </tr>
        <tr>
          <th>Packaging</th>
          <td>Branded tag, individual poly bag, corrugated box.</td>
        </tr>
      </tbody>
    </Table>
  );
}
