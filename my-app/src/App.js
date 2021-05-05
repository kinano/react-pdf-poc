import logo from './logo.svg';
import './App.css';
import { PDFDownloadLink } from "@react-pdf/renderer";
import {
	Document,
	Page,
  Text
} from "@react-pdf/renderer";

const getPDF = () => {
  return (
    <Document>
      <Page orientation="landscape">
        <Text fill="black">
          This is a test
        </Text>
      </Page>
    </Document>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PDFDownloadLink
          document={getPDF()}>
          Generate PDF
        </PDFDownloadLink>
      </header>
    </div>
  );
}

export default App;
