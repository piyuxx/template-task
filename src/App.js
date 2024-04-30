import 'bootstrap/dist/css/bootstrap.min.css';
import react, { useEffect, useState } from "react";
import axios from "axios";
import Header from './Header';
import Footer from './Footer';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drugDetails, setDrugDetails] = useState();
  const [drugName, setDrugName] = useState();
  useEffect(() => {
    axios
      .post("https://hidocdr.com/api/hidoc-us/drug/getDrugList")
      .then((response) => {
        setData(response.data);
        setLoading(false);
        console.log("DATA", data);
      });
  }, []);

  const showDrugDetails = (details, name) => {
    setDrugDetails(details);
    setDrugName(name);
  };

  if (loading) return <div>Loading</div>;

  return (
    <main>
      <Header />

      <div className="container text-center mt-4">
        <div className="row">
          <div className="mt-2 col-md-6">
            <p style={{ fontSize: 10, color: "gray", fontWeight: "400" }}>
              Dailymed Drug Database: The DailyMed database contains 143072 labeling submitted to
              the food and drug administrator (FDA) by companies. DailyNed does not contain a
              complete listing of labeling for FDA-regulated products (e.g., labeling that is not submitted
              to the FDA).
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col">

                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Anesthesia
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Cardiology
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Critical Care
                </button>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Dentistry
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Dermatology
                </button>
              </div>
              <div className="col">
                <button type="button" className="btn btn-outline-primary text btn-sm">
                  Diabetology
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6 border border-dark border-2">
            <div className="mt-2">Drug Data</div>
            <div className="overflow-auto" style={{ maxHeight: '200px' }}>
              {data.data.drugData.map((val, index) => (
                <div
                  className="icon-link-hover"
                  key={val.id}
                  onMouseOver={() => showDrugDetails(val.drugDetails, val.drugName)}
                >
                  {console.log(val)}
                  {val.drugName}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-6 border border-dark border-2">
            <div className="mt-2">Drug Details</div>
            <div className="mt-2" style={{ color: 'skyblue' }}>{drugName}</div>
            <div style={{ fontSize: 10, fontWeight: "300" }}>
              {drugDetails}
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center mt-5">
        <h4 className='ml-9' style={{ textAlign: 'left' }}>
          Explore More Hidoc
        </h4>
        <div className="row">
          <div className="col-md-4">
            <h3>COVID-19 Diagnoses Surge</h3>
            <p>The number of COVID-19 cases has surged in urban areas, prompting concerns about healthcare capacity.</p>
          </div>
          <div className="col-md-4">
            <h3>Rise in Cancer Diagnoses</h3>
            <p>New statistics show a significant increase in cancer diagnoses, highlighting the importance of early detection.</p>
          </div>
          <div className="col-md-4">
            <h3>Alzheimer's Diagnosis Breakthrough</h3>
            <p>Researchers announce a promising breakthrough in the early diagnosis of Alzheimer's disease, offering hope for better treatment.</p>
          </div>
        </div>
      </div>



      <Footer />
    </main>
  );
}
