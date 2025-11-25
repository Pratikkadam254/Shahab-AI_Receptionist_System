import React from 'react';
import { Check, X, ShieldCheck, Zap, Server, Globe, Users, Clock, Database, ChevronDown, ChevronUp } from 'lucide-react';

export const IconCheck = ({ className = "w-5 h-5" }: { className?: string }) => <Check className={className} />;
export const IconX = ({ className = "w-5 h-5" }: { className?: string }) => <X className={className} />;
export const IconShield = ({ className = "w-5 h-5" }: { className?: string }) => <ShieldCheck className={className} />;
export const IconZap = ({ className = "w-5 h-5" }: { className?: string }) => <Zap className={className} />;
export const IconServer = ({ className = "w-5 h-5" }: { className?: string }) => <Server className={className} />;
export const IconGlobe = ({ className = "w-5 h-5" }: { className?: string }) => <Globe className={className} />;
export const IconUsers = ({ className = "w-5 h-5" }: { className?: string }) => <Users className={className} />;
export const IconClock = ({ className = "w-5 h-5" }: { className?: string }) => <Clock className={className} />;
export const IconDatabase = ({ className = "w-5 h-5" }: { className?: string }) => <Database className={className} />;
export const IconChevronDown = ({ className = "w-5 h-5" }: { className?: string }) => <ChevronDown className={className} />;
export const IconChevronUp = ({ className = "w-5 h-5" }: { className?: string }) => <ChevronUp className={className} />;
