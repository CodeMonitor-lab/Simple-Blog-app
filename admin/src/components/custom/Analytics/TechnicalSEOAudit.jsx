import React from "react";
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const TechnicalSEOAudit = () => {
  const audits = [
    { title: "Mobile Responsiveness", status: "passed", details: "All pages are mobile-friendly" },
    { title: "Page Speed", status: "warning", details: "Average load time: 3.2s (target: <2s)" },
    { title: "SSL Certificate", status: "passed", details: "Valid SSL certificate installed" },
    { title: "XML Sitemap", status: "passed", details: "Sitemap.xml is properly configured" },
    { title: "Robots.txt", status: "warning", details: "Some pages are accidentally blocked" },
    { title: "Structured Data", status: "error", details: "Missing schema markup on blog posts" },
  ];

  const renderStatusIcon = (status) => {
    switch (status) {
      case "passed":
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case "warning":
        return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case "error":
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <main className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Technical SEO Audit</h3>
        </div>

        <div className="p-6">
          <div className="space-y-4">
            {audits.map((audit, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition"
              >
                <div>
                  <h4 className="font-medium text-gray-900">{audit.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{audit.details}</p>
                </div>
                <div>{renderStatusIcon(audit.status)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechnicalSEOAudit;
