import React from 'react';
import { 
  FiTruck, 
  FiFileText, 
  FiRotateCcw, 
  FiDownload 
} from 'react-icons/fi';
import './OrderFeatures.css';

const featuresData = [
  {
    id: 1,
    title: 'Order Tracking',
    description: 'Track and manage customer orders',
    icon: <FiTruck />,
    bgColor: '#fdf2f0',
    iconColor: '#a04d2a'
  },
  {
    id: 2,
    title: 'Invoice & Billing',
    description: 'Download invoices and billing details',
    icon: <FiFileText />,
    bgColor: '#f0f7ff',
    iconColor: '#2563eb'
  },
  {
    id: 3,
    title: 'Easy Returns',
    description: 'Manage return requests and refunds',
    icon: <FiRotateCcw />,
    bgColor: '#fff8f0',
    iconColor: '#b45309'
  },
  {
    id: 4,
    title: 'Export Reports',
    description: 'Export order data in multiple formats',
    icon: <FiDownload />,
    bgColor: '#f0fdf4',
    iconColor: '#16a34a'
  }
];

export default function OrderFeatures() {
  return (
    <div className="OrderFeatures">
      <div className="OrderFeatures__grid">
        {featuresData.map((feature) => (
          <div key={feature.id} className="OrderFeatures__card">
            <div 
              className="OrderFeatures__iconWrapper"
              style={{ 
                backgroundColor: feature.bgColor, 
                color: feature.iconColor 
              }}
            >
              {feature.icon}
            </div>
            
            <div className="OrderFeatures__content">
              <h4 className="OrderFeatures__title">{feature.title}</h4>
              <p className="OrderFeatures__description">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}