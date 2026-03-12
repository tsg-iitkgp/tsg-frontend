"use client";
import Layout from "../../components/Layouts/Layout";
import {
  DropdownSelector,
  faqDropdownList,
} from "../../components/DropdownSelector";

export default function FA() {
  if (typeof window !== "undefined") document.title = "FAQs | TSG";

  return (
    <Layout>
      <section>
        <p className="pageHeading">FAQs</p> {/* Global CSS */}
        <DropdownSelector
          itemList={faqDropdownList}
          defaultOption={faqDropdownList[0].index}
        />
      </section>
    </Layout>
  );
}
