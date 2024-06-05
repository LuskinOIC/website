"use client";

import { useState, useEffect } from 'react';

import { getBlogData } from './getBlogData';
import BlogSelector from './BlogSelector';
import Gallery from './Gallery';
import { PageSectionContainer } from "@/app/components/PageSection/PageSection";

interface OptionType {
  label: string;
  value: string;
  targetID: string;
}

export default function BlogIndex() {
  const [selectedSection, setSelectedSection] = useState('news');
  const [data, setData] = useState<any>({});

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogData();
      setData(blogData);
    }
    fetchData();
  }, [data]);

  const dropdownOptions: OptionType[] = [
    { label: "News", value: "news", targetID: "news" },
    { label: "Insights", value: "insights", targetID: "insights" },
    { label: "Events", value: "events", targetID: "events" },
    {
      label: "Patient Stories",
      value: "patient-stories",
      targetID: "patient-stories",
    },
  ];

  const handleSectionSelect = (section: string) => {
    setSelectedSection(section);
  };

  const getSectionData = () => {
    switch (selectedSection) {
      case 'news':
        return data.news;
      case 'insights':
        return data.insights;
      case 'events':
        return data.events;
      case 'patient stories':
        return data.patientStories;
      default:
        return [];
    }
  };

  return (
    <div>
      <PageSectionContainer showTopMargin={true}>
        <BlogSelector onSelect={handleSectionSelect} />
      </PageSectionContainer>
      <PageSectionContainer showTopMargin={true}>
        <Gallery news={getSectionData()} />
      </PageSectionContainer>
    </div>
  );
}
