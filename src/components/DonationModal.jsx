import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { X, Lock, CheckCircle, AlertCircle, Phone, Smartphone, CreditCard, Building } from 'lucide-react';
import Button from './Button';

const DonationModal = ({ isOpen, onClose, initialAmount = '50000' }) => {
    const [step, setStep] = useState(1); // 1: Amount, 2: Method, 3: Processing, 4: Success, 5: Error
    const [amount, setAmount] = useState(initialAmount);
    const [customAmount, setCustomAmount] = useState('');
    const [method, setMethod] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    if (!isOpen) return null;

    const presetAmounts = [
        { value: '10000', label: '10,000' },
        { value: '25000', label: '25,000' },
        { value: '50000', label: '50,000' },
        { value: '100000', label: '100,000' },
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
        setMethod('');
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-scale-in">

                {/* Header */}
                <div className="bg-primary p-6 flex justify-between items-center text-white">
                    <h2 className="font-heading font-bold text-xl flex items-center gap-2">
                        <Lock size={18} className="text-accent-gold" />
                        Secure Donation
                    </h2>
                    <button onClick={onClose} className="text-white/80 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* content */}
                <div className="p-6 md:p-8">

                    {/* Step 1: Amount Selection */}
                    {step === 1 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <p className="text-primary-green font-bold uppercase text-xs tracking-widest mb-2">Select Amount</p>
                                <h3 className="text-2xl font-bold text-primary">Help Us Restore Hope</h3>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {presetAmounts.map((preset) => (
                                    <button
                                        key={preset.value}
                                        onClick={() => handleAmountSelect(preset.value)}
                                        className={`py-3 px-4 rounded-lg font-bold border-2 transition-all ${amount === preset.value && !customAmount
                                            ? 'border-primary-green bg-primary-green/10 text-primary-green'
                                            : 'border-gray-200 text-gray-600 hover:border-primary-green/50'
                                            }`}
                                    >
                                        {preset.label} TZS
                                    </button>
                                ))}
                            </div>

                            <div className="relative">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">TZS</span>
                                <input
                                    type="number"
                                    placeholder="Custom Amount"
                                    value={customAmount}
                                    onChange={handleCustomAmountChange}
                                    className="w-full pl-14 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-green focus:outline-none font-bold text-lg"
                                />
                            </div>

                            <Button
                                onClick={() => setStep(2)}
                                className="w-full text-lg py-4"
                                disabled={!amount}
                            >
                                Continue
                            </Button>
                        </div>
                    )}

                    {/* Step 2: Payment Method */}
                    {step === 2 && (
                        <div className="space-y-6">
                            <div className="text-center">
                                <button onClick={() => setStep(1)} className="text-sm text-gray-400 hover:text-primary mb-2">← Back</button>
                                <h3 className="text-2xl font-bold text-primary">Select Payment Method</h3>
                            </div>

                            <div className="space-y-3">
                                {['M-Pesa', 'Tigo Pesa', 'Airtel Money'].map((m) => (
                                    <button
                                        key={m}
                                        onClick={() => { setMethod(m); }}
                                        className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${method === m
                                            ? 'border-primary-green bg-primary-green/5 shadow-md'
                                            : 'border-gray-100 hover:border-gray-300'
                                            }`}
                                    >
                                        <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                                            <Smartphone size={20} className="text-primary" />
                                        </div>
                                        <span className="font-bold text-lg text-primary">{m}</span>
                                    </button>
                                ))}

                                <button
                                    onClick={() => setMethod('Bank/Card')}
                                    className={`w-full flex items-center p-4 rounded-xl border-2 transition-all ${method === 'Bank/Card'
                                        ? 'border-primary-green bg-primary-green/5 shadow-md'
                                        : 'border-gray-100 hover:border-gray-300'
                                        }`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                                        <CreditCard size={20} className="text-primary" />
                                    </div>
                                    <span className="font-bold text-lg text-primary">Bank / Card</span>
                                </button>
                            </div>

                            {(method === 'M-Pesa' || method === 'Tigo Pesa' || method === 'Airtel Money') && (
                                <div className="animate-fade-in-up bg-gray-50 p-4 rounded-lg border border-gray-100">
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="e.g. 07XXXXXXXX"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary-green outline-none bg-white"
                                    />
                                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                                        <Smartphone size={12} /> We will send a payment prompt to this number.
                                    </p>
                                </div>
                            )}

                            {method === 'Bank/Card' && (
                                <div className="animate-fade-in-up bg-gray-50 p-4 rounded-lg border border-gray-100 space-y-3 text-sm">
                                    <div>
                                        <p className="font-bold text-primary">Bank Transfer Details:</p>
                                        <p className="text-gray-600">CRDB Bank</p>
                                        <p className="text-gray-600 font-mono">Acc: 0150XXXXXXX</p>
                                        <p className="text-gray-600">Name: RECAN FOUNDATION</p>
                                    </div>
                                    <div className="border-t border-gray-200 pt-2">
                                        <p className="font-bold text-primary">Online Payment:</p>
                                        <p className="text-gray-600 text-xs">Redirecting to secure gateway...</p>
                                    </div>
                                </div>
                            )}

                            <Button
                                onClick={() => {
                                    if (['M-Pesa', 'Tigo Pesa', 'Airtel Money'].includes(method)) {
                                        setStep(2.5); // Go to Instructions
                                    } else {
                                        handleDonate();
                                    }
                                }}
                                className="w-full text-lg py-4 shadow-lg"
                                disabled={!method || ((['M-Pesa', 'Tigo Pesa', 'Airtel Money'].includes(method)) && !phoneNumber)}
                            >
                                {method === 'Bank/Card' ? 'Proceed to Payment' : 'Proceed'}
                            </Button>
                        </div>
                    )}

                    {/* Step 2.5: Payment Instructions */}
                    {step === 2.5 && (
                        <div className="space-y-6 animate-fade-in-up">
                            <div className="text-center">
                                <button onClick={() => setStep(2)} className="text-sm text-gray-400 hover:text-primary mb-2">← Change Method</button>
                                <h3 className="text-xl font-bold text-primary">Complete Payment</h3>
                                <p className="text-gray-500 text-sm">Please follow the steps below on your phone:</p>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">

                                {method === 'M-Pesa' && (
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">1</span>
                                            <p className="text-sm text-gray-700">Dial <span className="font-bold text-primary">*150*00#</span> (M-Pesa Menu)</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">2</span>
                                            <p className="text-sm text-gray-700">Select <span className="font-bold text-primary">4. Lipa by M-Pesa</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">3</span>
                                            <p className="text-sm text-gray-700">Select <span className="font-bold text-primary">1. M-Pesa Till</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">4</span>
                                            <p className="text-sm text-gray-700">Enter Business Number: <span className="font-mono font-bold text-lg text-primary">505050</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">5</span>
                                            <p className="text-sm text-gray-700">Amount: <span className="font-bold text-primary">{Number(amount).toLocaleString()} TZS</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">6</span>
                                            <p className="text-sm text-gray-700">Enter your <span className="font-bold text-primary">PIN</span> to confirm.</p>
                                        </div>
                                    </div>
                                )}

                                {(method === 'Tigo Pesa' || method === 'Airtel Money') && (
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">1</span>
                                            <p className="text-sm text-gray-700">Dial <span className="font-bold text-primary">{method === 'Tigo Pesa' ? '*150*01#' : '*150*60#'}</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">2</span>
                                            <p className="text-sm text-gray-700">Select <span className="font-bold text-primary">Pay Bills / Lipa</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">3</span>
                                            <p className="text-sm text-gray-700">Enter Business Number: <span className="font-mono font-bold text-lg text-primary">505050</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">4</span>
                                            <p className="text-sm text-gray-700">Amount: <span className="font-bold text-primary">{Number(amount).toLocaleString()} TZS</span></p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-green text-white flex items-center justify-center text-xs font-bold">5</span>
                                            <p className="text-sm text-gray-700">Enter your <span className="font-bold text-primary">PIN</span> to confirm.</p>
                                        </div>
                                    </div>
                                )}

                            </div>

                            <Button
                                onClick={handleDonate}
                                className="w-full text-lg py-4 shadow-lg"
                            >
                                I have verified the payment
                            </Button>
                        </div>
                    )}

                    {/* Step 3: Processing */}
                    {step === 3 && (
                        <div className="text-center py-10 space-y-6">
                            <div className="w-16 h-16 border-4 border-gray-200 border-t-primary-green rounded-full animate-spin mx-auto"></div>
                            <h3 className="text-xl font-bold text-primary">Processing Payment...</h3>
                            <p className="text-gray-500">Please check your phone for the confirmation prompt.</p>
                        </div>
                    )}

                    {/* Step 4: Success */}
                    {step === 4 && (
                        <div className="text-center py-8 space-y-6">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce-in">
                                <CheckCircle size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-primary w-full">Thank You!</h3>
                            <p className="text-gray-600">
                                Your donation of <span className="font-bold text-primary">{Number(amount).toLocaleString()} TZS</span> has been initiated.
                            </p>
                            <p className="text-sm text-gray-500">
                                You will receive a confirmation SMS shortly.
                            </p>
                            <Button onClick={() => { onClose(); resetFlow(); }} className="mt-4">
                                Close
                            </Button>
                        </div>
                    )}

                </div>

                {/* Footer Trust Badge */}
                <div className="bg-gray-50 p-4 text-center border-t border-gray-100">
                    <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
                        <Lock size={12} /> SSL Encrypted & Secure
                    </p>
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
