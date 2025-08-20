/**
 * Payroll Setup Form - React Version
 * Built using Design System Components
 */

import React, { useState } from 'react';
import { 
  Button, 
  TextInput, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent 
} from '../src/components/index.js';

const PayrollSetupForm = () => {
  const [formData, setFormData] = useState({
    payrollName: 'January payroll cycle 1',
    fundingAccount: '1 day',
    payDay: 'Jan 15, 2025',
    processingPeriod: '1 day'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCancel = () => {
    console.log('Cancel clicked');
    // Navigate back or close form
  };

  const handleNext = () => {
    console.log('Next clicked', formData);
    // Proceed to next step
  };

  return (
    <div className="min-h-screen bg-surface-container flex flex-col">
      {/* Top Bar */}
      <div className="bg-surface-container h-20 flex items-center justify-between px-6 py-2 border-b border-neutral-300 shadow-sm">
        <div className="flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <h1 className="text-text-primary text-base font-semibold leading-[22px]">
              Run regular payroll
            </h1>
            <span className="text-text-secondary text-sm leading-5">
              My Hospitality Company
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <Button 
            variant="secondary" 
            size="md" 
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            size="md" 
            onClick={handleNext}
          >
            Next
          </Button>
        </div>
      </div>

      {/* Page Content */}
      <div className="flex-1 bg-surface-background flex flex-col items-center justify-start px-6 py-10 gap-6">
        <Card 
          variant="elevated" 
          padding="none" 
          className="w-full max-w-[790px]"
        >
          {/* Header */}
          <CardHeader className="px-6 pt-6 pb-4">
            <CardTitle className="text-lg font-bold text-text-primary leading-[25px]">
              Payroll setup
            </CardTitle>
            <p className="text-sm font-semibold text-text-primary leading-5 mt-2">
              Pay period: Jan 1 - Jan 15, 2025
            </p>
          </CardHeader>

          {/* Divider */}
          <div className="h-px bg-border-light w-full"></div>

          {/* Content */}
          <CardContent className="p-6 flex flex-col gap-6">
            {/* Payroll Name */}
            <div className="flex flex-col gap-4">
              <TextInput
                label="Payroll name"
                value={formData.payrollName}
                onChange={(e) => handleInputChange('payrollName', e.target.value)}
                className="w-[340px]"
              />
            </div>

            {/* Funding Account */}
            <div className="flex flex-col gap-4">
              <TextInput
                label="Funding account"
                value={formData.fundingAccount}
                onChange={(e) => handleInputChange('fundingAccount', e.target.value)}
                supportingText="We'll debit this account for the automatic withdrawal total of this payroll run."
                className="w-[340px]"
              />
            </div>

            {/* Pay Day and Processing Period */}
            <div className="flex flex-col gap-6">
              <TextInput
                label="Pay day"
                value={formData.payDay}
                onChange={(e) => handleInputChange('payDay', e.target.value)}
                className="w-[340px]"
              />

              <TextInput
                label="Processing period"
                value={formData.processingPeriod}
                onChange={(e) => handleInputChange('processingPeriod', e.target.value)}
                supportingText="Determines how many days ahead of payday you will have to approval payroll (Approve Deadline)."
                className="w-[340px]"
              />
            </div>

            {/* Approve Deadline */}
            <div className="text-sm text-text-primary leading-5">
              Approve deadline: <span className="font-semibold">Sat, Jan 15 2025, 6:00PM PST</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PayrollSetupForm;
