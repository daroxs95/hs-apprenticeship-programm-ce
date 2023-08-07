"use client";

import { ReactNode, useEffect, useState } from "react";
import ssheet from "./FAQs.module.scss";
import { FAQ } from "@/modules/scholarships/domain/types";
import { Accordion } from "../Accordion";
import { Title } from "../Title";
import { Separator } from "../Separator";
import { Select } from "../Select";

type Props = {
  children?: ReactNode | ReactNode[];
  faqs: FAQ[];
  categories: string[];
};

export const FAQs = ({ children, faqs, categories }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    setSelectedCategory(categories[0]);
  }, [categories]);

  return (
    <div className={ssheet.container}>
      <div className={ssheet.controls}>
        <Title title="Frequently asked question" />
        <div className={ssheet.filter}>
          <label className={ssheet.filterLabel}>Filter by:</label>
          <Select
            placeholder="Select a category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.currentTarget.value)}
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </div>
      </div>
      {faqs
        .filter((f) => (selectedCategory ? f.type === selectedCategory : true))
        .map((q) => (
          <div key={q.question}>
            <Separator style={{ margin: 0, padding: 0 }} />
            <div className={ssheet.faqGroup}>
              <h3 className={ssheet.faqType}>{q.type}</h3>
              <Accordion
                key={q.question}
                head={<h3 className={ssheet.faqQuestion}>{q.question}</h3>}
              >
                {q.answer.map((a, i) => (
                  <p
                    key={`${q.question}-ans-${i}`}
                    className={ssheet.faqAnswer}
                  >
                    {" "}
                    {a.data}
                  </p>
                ))}
              </Accordion>
            </div>
          </div>
        ))}
      {children}
    </div>
  );
};
