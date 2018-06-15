import React from "react";
import Toggle from "react-toggle";
import {
  FaVolumeControlPhone,
  FaMobile,
  FaEnvelopeO
} from "react-icons/lib/fa";
import Payment from "./payment";

class Profile extends React.Component {
  renderLinks() {
    const links = ["General Details", "AutoPay", "Communication Preferences"];
    let currentPage = "Communication Preferences";
    return (
      <ul>
        {links.map(function(name, index) {
          return (
            <li key={index} className={name === currentPage ? "active" : ""}>
              {name}
            </li>
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div className="page-content">
        <div className="page-navigation">{this.renderLinks()}</div>
        <form>
        <div className="page-module">
          <div className="module-header">Communication Preferences</div>
          <div className="section-header">Account Notifications</div>
          <div className="module-section">
            <a href="/notifications">View Account Notifications</a>
          </div>
          <div className="section-header">Bill Delivery & Notifications</div>
          <div className="module-section">
            <a href="/notifications">View Bill Delivery & Notifications</a>
          </div>
          <div className="section-header">Advanced Options</div>
          <div className="module-section section-title">
            Account Notifications
          </div>
          <div className="module-section">
            Add/Remove Account{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span className="active">
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Change Password{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span>
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Service Ticket Created{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span className="active">
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span>
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Update to Ticket{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span className="active">
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Ticket Status Change{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span className="active">
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section section-title">
            Bill & Delivery Notifications
          </div>
          <div className="module-section">
            Paperless{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
          </div>
          <div className="module-section">
            New Bill{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span className="active">
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Bill Due Date{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Payment Posted{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Payment Failure{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
          </div>
          <div className="module-section">
            Bill Overdue{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
            <div className="option">
              Resend notification after:{" "}
              <select name="resend">
                <option value="3" selected>3 days</option>
                <option value="7">7 days</option>
                <option value="30">30 days</option>
              </select>
            </div>
          </div>
          <div className="module-section">
            Bill Threshold{" "}
            <Toggle
              icons={{
                checked: "Yes",
                unchecked: "No"
              }}
              defaultChecked={true}
              aria-label="No label tag"
            />
            <div className="contact-switch">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="active">
                <FaMobile className="icon" /> Text
              </span>
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
            </div>
            <div className="option">
              Trending above:{" "}
              <select name="trending">
                <option value="last" selected>Last month's bill</option>
                <option value="this">This month's bill</option>
                <option value="next">Next month's bill</option>
              </select>
            </div>
          </div>
          <div className="section-header">Contact Preferences</div>
          <div className="module-section">
            Set the time frame for each channel of communication.
            <div className="timezone">
              <strong>Time Zone:</strong>{" "}
              <select name="trending">
                <option value="east" selected>Eastern Standard Time</option>
                <option value="central">Central Standard Time</option>
                <option value="pacific">Pacific Standard Time</option>
              </select>
            </div>
            <div className="timezone-contact-method">
              <span>
                <FaEnvelopeO className="icon" /> Email
              </span>
              <span className="timeFrom">
                from:{" "}
                <select name="from">
                  <option value="8" selected>8:00 AM</option>
                  <option value="9">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                </select>
              </span>
              <span className="timeUntil">
                until:{" "}
                <select name="until">
                  <option value="630" selected>6:30 PM</option>
                  <option value="730">7:30 PM</option>
                  <option value="830">8:30 PM</option>
                </select>
              </span>
            </div>
            <div className="timezone-contact-method">
              <span>
                <FaMobile className="icon" /> Text
              </span>
              <span className="timeFrom">
                from:{" "}
                <select name="from">
                  <option value="8" selected>8:00 AM</option>
                  <option value="9">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                </select>
              </span>
              <span className="timeUntil">
                until:{" "}
                <select name="until">
                  <option value="630" selected>6:30 PM</option>
                  <option value="730">7:30 PM</option>
                  <option value="830">8:30 PM</option>
                </select>
              </span>
            </div>
            <div className="timezone-contact-method">
              <span>
                <FaVolumeControlPhone className="icon" /> Phone
              </span>
              <span className="timeFrom">
                from:{" "}
                <select name="from">
                  <option value="8" selected>8:00 AM</option>
                  <option value="9">9:00 AM</option>
                  <option value="10">10:00 AM</option>
                </select>
              </span>
              <span className="timeUntil">
                until:{" "}
                <select name="until">
                  <option value="630" selected>6:30 PM</option>
                  <option value="730">7:30 PM</option>
                  <option value="830">8:30 PM</option>
                </select>
              </span>
            </div>
          </div>
        </div>
        </form>
        <div className="module-footer">
          <button type="submit" className="btn-primary">Save Changes</button>
        </div>
      </div>
    );
  }
}

export default Profile;
