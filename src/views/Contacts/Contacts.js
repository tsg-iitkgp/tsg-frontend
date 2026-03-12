"use client";
import Layout from "../../components/Layouts/Layout";
import Styles from "../../styles/views/contacts.module.css";
import {
  DropdownSelector,
  contactsDropdownList,
} from "../../components/DropdownSelector";

function Contacts() {
  if (typeof window !== "undefined") document.title = "Contacts | TSG";

  return (
    <Layout>
      <section className={Styles.maincontainer} >
        <p className="pageHeading">CONTACTS</p> {/* Global CSS */}
        <DropdownSelector
          itemList={contactsDropdownList}
          defaultOption={contactsDropdownList[0]}
        />
      </section>
    </Layout>
  );
}

export default Contacts;
