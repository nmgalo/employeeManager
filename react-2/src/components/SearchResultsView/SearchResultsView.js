import { useState } from "react";

import "./results.css";

export default function SearchResultsView() {
  return (
    <div className="search_results_wrapper">
      <table className="search_results_table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>ID number</th>
            <th>Date Of birth</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rows="2">
              <div>
                <img src="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-17/@@images/image/large" />
                <span>ნიკა მგალოვლიშვილი</span>
              </div>
            </td>
            <td rows="1">0101103182</td>
            <td rows="1">02.08.2001</td>
            <td rows="1">Male</td>
          </tr>

          <tr>
            <td rows="2">
              <div>
                <img src="https://www.fbi.gov/wanted/vicap/unidentified-persons/jane-doe-17/@@images/image/large" />
                <span>აბდულ ჯაბარი ნავაროტკებით და გოდოს შვილით</span>
              </div>
            </td>
            <td rows="1">0101103182</td>
            <td rows="1">02.08.2001</td>
            <td rows="1">Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
