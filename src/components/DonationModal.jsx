import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { X, Lock, CheckCircle, Heart, Shield, Smartphone, CreditCard, ArrowRight, ArrowLeft, Users } from 'lucide-react';
import Button from './Button';

const DonationModal = ({ isOpen, onClose, initialAmount = '50000' }) => {
    const [step, setStep] = useState(1); // 1: Amount & Method, 2: Details, 3: Processing, 4: Success
    const [amount, setAmount] = useState(initialAmount);
    const [customAmount, setCustomAmount] = useState('');
    const [method, setMethod] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    if (!isOpen) return null;

    const presetAmounts = [
        { 
            value: '10000', 
            label: '10,000',
            impact: 'Provides school supplies for 1 child',
            popular: false
        },
        { 
            value: '25000', 
            label: '25,000',
            impact: 'Covers meals for 5 children for a week',
            popular: false
        },
        { 
            value: '50000', 
            label: '50,000',
            impact: 'Medical checkup & supplies for 3 children',
            popular: true
        },
        { 
            value: '100000', 
            label: '100,000',
            impact: 'Monthly educational support for 2 students',
            popular: false
        },
    ];

    const handleAmountSelect = (val) => {
        setAmount(val);
        setCustomAmount('');
    };

    const handleCustomAmountChange = (e) => {
        setCustomAmount(e.target.value);
        setAmount(e.target.value);
    };

    const handleDonate = () => {
        setStep(3); // Processing
        // Simulate API call
        setTimeout(() => {
            setStep(4); // Success (Simulation)
        }, 2000);
    };

    const resetFlow = () => {
        setStep(1);
        setAmount('50000');
        setCustomAmount('');
        setMethod('');
        setPhoneNumber('');
    };

    const getImpactMessage = () => {
        const preset = presetAmounts.find(p => p.value === amount);
        return preset?.impact || 'Makes a real difference in a child\'s life';
    };

    return (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={onClose}
        >
            <div 
                className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[95vh] overflow-hidden relative flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110"
                    aria-label="Close donation modal"
                >
                    <X size={20} className="text-gray-700" />
                </button>

                {/* Hero Section with Impact */}
                <div className="bg-gradient-to-br from-primary-green to-primary p-8 md:p-10 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-gold/10 rounded-full -ml-24 -mb-24"></div>
                    
                    <div className="relative z-10">
                        <div className="flex items-center gap-2 mb-3">
                            <Heart size={24} className="text-accent-gold" />
                            <span className="text-accent-gold font-bold text-sm uppercase tracking-wider">Make an Impact</span>
                        </div>
                        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-3 leading-tight">
                            Change a Child's Future
                        </h2>
                        <p className="text-white/90 text-lg leading-relaxed max-w-xl">
                            Every contribution directly supports vulnerable children in Tanzania with education, healthcare, and protection.
                        </p>
                    </div>
                </div>

                {/* Progress Indicator */}
                {step < 3 && (
                    <div className="px-8 pt-6 pb-2">
                        <div className="flex items-center justify-center gap-2">
                            <div className="flex items-center">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                                    step >= 1 ? 'bg-primary-green text-white' : 'bg-gray-200 text-gray-400'
                                }`}>
                                    1
                                </div>
                                <div className={`h-1 w-16 md:w-24 mx-1 transition-all ${
                                    step >= 2 ? 'bg-primary-green' : 'bg-gray-200'
                                }`}></div>
                            </div>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                                step >= 2 ? 'bg-primary-green text-white' : 'bg-gray-200 text-gray-400'
                            }`}>
                                2
                            </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500 mt-2 px-4">
                            <span className="font-medium">Amount & Method</span>
                            <span className="font-medium">Complete</span>
                        </div>
                    </div>
                )}

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-1">

                    {/* Step 1: Amount Selection */}
                    {step === 1 && (
                        <div className="space-y-8">
                            {/* Amount Selection Cards */}
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1">Choose Your Donation Amount</h3>
                                <p className="text-gray-500 text-sm mb-6">Select a preset amount or enter your own</p>
                                
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    {presetAmounts.map((preset) => (
                                        <button
                                            key={preset.value}
                                            onClick={() => handleAmountSelect(preset.value)}
                                            className={`relative p-5 rounded-xl border-2 transition-all text-left group hover:scale-[1.02] ${
                                                amount === preset.value && !customAmount
                                                    ? 'border-primary-green bg-gradient-to-br from-primary-green/10 to-primary-green/5 shadow-lg shadow-primary-green/10'
                                                    : 'border-gray-200 hover:border-primary-green/40 hover:shadow-md'
                                            }`}
                                        >
                                            {preset.popular && (
                                                <span className="absolute -top-2 -right-2 bg-accent-terra text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                                                    Popular
                                                </span>
                                            )}
                                            <div className="flex items-center justify-between mb-2">
                                                <div className={`text-2xl font-bold font-heading ${
                                                    amount === preset.value && !customAmount ? 'text-primary-green' : 'text-primary'
                                                }`}>
                                                    {preset.label} <span className="text-base font-normal text-gray-500">TZS</span>
                                                </div>
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                    amount === preset.value && !customAmount
                                                        ? 'border-primary-green bg-primary-green'
                                                        : 'border-gray-300'
                                                }`}>
                                                    {amount === preset.value && !customAmount && (
                                                        <CheckCircle size={16} className="text-white" />
                                                    )}
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {preset.impact}
                                            </p>
                                        </button>
                                    ))}
                                </div>

                                {/* Custom Amount */}
                                <div className="relative">
                                    <label htmlFor="custom-amount" className="block text-sm font-semibold text-gray-700 mb-2">
                                        Or enter a custom amount
                                    </label>
                                    <div className="relative">
                                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-bold text-lg">TZS</span>
                                        <input
                                            id="custom-amount"
                                            type="number"
                                            placeholder="Enter any amount"
                                            value={customAmount}
                                            onChange={handleCustomAmountChange}
                                            aria-label="Custom donation amount"
                                            className="w-full pl-16 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:outline-none focus:ring-4 focus:ring-primary-green/10 font-bold text-xl transition-all"
                                        />
                                    </div>
                                    {customAmount && (
                                        <p className="text-sm text-primary-green mt-2 font-medium">
                                            ✓ Your custom amount: {Number(customAmount).toLocaleString()} TZS
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Payment Method Selection */}
                            <div>
                                <h3 className="text-xl font-bold text-primary mb-1">Select Payment Method</h3>
                                <p className="text-gray-500 text-sm mb-6">Choose how you'd like to donate</p>

                                <div className="space-y-3">
                                    {[
                                        { id: 'M-Pesa', icon: Smartphone, label: 'M-Pesa', desc: 'Fast & secure mobile payment' },
                                        { id: 'Tigo Pesa', icon: Smartphone, label: 'Tigo Pesa', desc: 'Mobile money transfer' },
                                        { id: 'Airtel Money', icon: Smartphone, label: 'Airtel Money', desc: 'Mobile wallet payment' },
                                        { id: 'Bank/Card', icon: CreditCard, label: 'Bank Transfer / Card', desc: 'Direct bank transfer or card payment' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => setMethod(m.id)}
                                            className={`w-full flex items-center p-4 rounded-xl border-2 transition-all group hover:scale-[1.01] ${
                                                method === m.id
                                                    ? 'border-primary-green bg-primary-green/5 shadow-md'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 transition-all ${
                                                method === m.id
                                                    ? 'bg-primary-green text-white'
                                                    : 'bg-gray-100 text-primary group-hover:bg-gray-200'
                                            }`}>
                                                <m.icon size={24} />
                                            </div>
                                            <div className="flex-1 text-left">
                                                <div className="font-bold text-primary">{m.label}</div>
                                                <div className="text-sm text-gray-500">{m.desc}</div>
                                            </div>
                                            <div className={`w-5 h-5 rounded-full border-2 transition-all ${
                                                method === m.id ? 'border-primary-green bg-primary-green' : 'border-gray-300'
                                            }`}>
                                                {method === m.id && <CheckCircle size={16} className="text-white" />}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Impact Message */}
                            <div className="bg-gradient-to-r from-accent-gold/10 to-accent-terra/10 border border-accent-gold/20 rounded-xl p-5">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-full bg-accent-gold/20 flex items-center justify-center flex-shrink-0">
                                        <Heart size={20} className="text-accent-terra" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-primary mb-1">Your Impact</h4>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            {getImpactMessage()}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                                onClick={() => setStep(2)}
                                className="w-full text-lg py-5 shadow-xl shadow-accent-terra/20 hover:shadow-2xl hover:shadow-accent-terra/30"
                                disabled={!amount || !method}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    Continue to Payment
                                    <ArrowRight size={20} />
                                </span>
                            </Button>

                            {/* Trust Signals */}
                            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-2">
                                        <Shield size={18} className="text-primary-green" />
                                    </div>
                                    <p className="text-xs font-semibold text-gray-600">100% Secure</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-2">
                                        <Lock size={18} className="text-primary-green" />
                                    </div>
                                    <p className="text-xs font-semibold text-gray-600">Encrypted</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-10 h-10 rounded-full bg-primary-green/10 flex items-center justify-center mx-auto mb-2">
                                        <Users size={18} className="text-primary-green" />
                                    </div>
                                    <p className="text-xs font-semibold text-gray-600">Direct Impact</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Payment Details & Confirmation */}
                    {step === 2 && (
                        <div className="space-y-8">
                            {/* Summary Card */}
                            <div className="bg-gradient-to-br from-primary/5 to-primary-green/5 border border-primary-green/20 rounded-2xl p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-gray-600 mb-1">Your donation amount</p>
                                        <p className="text-3xl font-bold font-heading text-primary-green">
                                            {Number(amount).toLocaleString()} <span className="text-lg font-normal text-gray-600">TZS</span>
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setStep(1)}
                                        className="text-sm text-primary-green hover:text-primary font-semibold flex items-center gap-1 hover:underline"
                                    >
                                        <ArrowLeft size={16} />
                                        Change
                                    </button>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-gray-700 bg-white/60 rounded-lg p-3">
                                    <Heart size={16} className="text-accent-terra flex-shrink-0" />
                                    <span className="font-medium">{getImpactMessage()}</span>
                                </div>
                            </div>

                            {/* Payment Method Details */}
                            {(['M-Pesa', 'Tigo Pesa', 'Airtel Money'].includes(method)) && (
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-1">Enter Your Phone Number</h3>
                                    <p className="text-gray-500 text-sm mb-4">We'll send you a payment prompt</p>
                                    
                                    <div className="relative">
                                        <label htmlFor="phone-number" className="sr-only">Phone number for mobile money payment</label>
                                        <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                            <Smartphone size={20} className="text-gray-400" />
                                            <span className="text-gray-400 font-semibold">+255</span>
                                        </div>
                                        <input
                                            id="phone-number"
                                            type="tel"
                                            placeholder="7XX XXX XXX"
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)}
                                            aria-required="true"
                                            className="w-full pl-24 pr-4 py-4 rounded-xl border-2 border-gray-200 focus:border-primary-green focus:outline-none focus:ring-4 focus:ring-primary-green/10 font-semibold text-lg transition-all"
                                        />
                                    </div>
                                    
                                    <div className="mt-4 bg-blue-50 border border-blue-100 rounded-xl p-4">
                                        <h4 className="font-bold text-primary text-sm mb-2 flex items-center gap-2">
                                            <span className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">i</span>
                                            Quick Steps to Complete Payment:
                                        </h4>
                                        <ol className="space-y-2 text-sm text-gray-700">
                                            <li className="flex gap-2">
                                                <span className="font-bold text-primary-green">1.</span>
                                                <span>Click "Complete Donation" below</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="font-bold text-primary-green">2.</span>
                                                <span>Check your phone for the {method} payment prompt</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="font-bold text-primary-green">3.</span>
                                                <span>Enter your PIN to confirm payment</span>
                                            </li>
                                            <li className="flex gap-2">
                                                <span className="font-bold text-primary-green">4.</span>
                                                <span>Receive instant confirmation via SMS</span>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            )}

                            {method === 'Bank/Card' && (
                                <div>
                                    <h3 className="text-xl font-bold text-primary mb-4">Bank Transfer Details</h3>
                                    
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Bank Name</p>
                                                <p className="font-bold text-primary">CRDB Bank</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-500 mb-1">Account Name</p>
                                                <p className="font-bold text-primary">RECAN FOUNDATION</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-xs text-gray-500 mb-1">Account Number</p>
                                            <div className="flex items-center justify-between bg-white border border-gray-300 rounded-lg p-3">
                                                <p className="font-mono font-bold text-lg text-primary">0150XXXXXXX</p>
                                                <button className="text-xs bg-primary-green text-white px-3 py-1 rounded-md hover:bg-primary transition-all">
                                                    Copy
                                                </button>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 pt-4">
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                <strong className="text-primary">Note:</strong> After completing your bank transfer, please send the transaction receipt to <a href="mailto:donations@recanfoundation.org" className="text-primary-green hover:underline font-semibold">donations@recanfoundation.org</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* CTA Button */}
                            <Button
                                onClick={handleDonate}
                                className="w-full text-lg py-5 shadow-xl shadow-primary-green/20 hover:shadow-2xl hover:shadow-primary-green/30"
                                disabled={(['M-Pesa', 'Tigo Pesa', 'Airtel Money'].includes(method) && !phoneNumber)}
                            >
                                <span className="flex items-center justify-center gap-2">
                                    <Lock size={20} />
                                    {method === 'Bank/Card' ? 'I\'ve Made the Transfer' : 'Complete Donation'}
                                </span>
                            </Button>

                            {/* Security Badge */}
                            <div className="flex items-center justify-center gap-6 text-xs text-gray-500 pt-2">
                                <div className="flex items-center gap-1">
                                    <Lock size={14} className="text-primary-green" />
                                    <span className="font-semibold">256-bit SSL</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <Shield size={14} className="text-primary-green" />
                                    <span className="font-semibold">Secure Payment</span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 3: Processing */}
                    {step === 3 && (
                        <div className="text-center py-12 space-y-6">
                            <div className="relative w-20 h-20 mx-auto">
                                <div className="w-20 h-20 border-4 border-primary-green/20 rounded-full"></div>
                                <div className="absolute top-0 left-0 w-20 h-20 border-4 border-transparent border-t-primary-green rounded-full animate-spin"></div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-2">Processing Your Donation...</h3>
                                <p className="text-gray-500">
                                    {(['M-Pesa', 'Tigo Pesa', 'Airtel Money'].includes(method))
                                        ? 'Please check your phone and enter your PIN to complete the payment.'
                                        : 'Verifying your donation details.'}
                                </p>
                            </div>
                            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 max-w-md mx-auto">
                                <p className="text-sm text-gray-700">
                                    <strong className="text-primary">Tip:</strong> Keep this window open until you receive confirmation.
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <div className="text-center py-12 space-y-6">
                            <div className="relative">
                                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-green-500/20 animate-ping"></div>
                                    <CheckCircle size={48} className="text-green-600 relative z-10" strokeWidth={2.5} />
                                </div>
                            </div>
                            
                            <div>
                                <h3 className="text-3xl font-bold text-primary mb-3">Thank You! 🎉</h3>
                                <p className="text-xl text-gray-700 font-medium mb-2">
                                    Your donation of <span className="text-primary-green font-bold">{Number(amount).toLocaleString()} TZS</span>
                                </p>
                                <p className="text-gray-500">has been successfully processed.</p>
                            </div>

                            <div className="bg-gradient-to-br from-accent-gold/10 to-accent-terra/10 border border-accent-gold/30 rounded-2xl p-6 max-w-md mx-auto">
                                <Heart size={32} className="text-accent-terra mx-auto mb-3" />
                                <p className="text-primary font-semibold leading-relaxed">
                                    {getImpactMessage()}
                                </p>
                                <p className="text-sm text-gray-600 mt-3">
                                    You're making a real difference in the lives of vulnerable children in Tanzania.
                                </p>
                            </div>

                            <div className="space-y-3">
                                <p className="text-sm text-gray-500">
                                    A confirmation receipt has been sent to your phone.
                                </p>
                                <Button 
                                    onClick={() => { onClose(); resetFlow(); }} 
                                    className="mx-auto px-12 py-4"
                                    variant="primary"
                                >
                                    Done
                                </Button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
};

DonationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    initialAmount: PropTypes.string,
};

export default DonationModal;
