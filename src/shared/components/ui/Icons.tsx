/**
 * @fileoverview Icon component wrappers for lucide-react
 * @module shared/components/ui/Icons
 */

import React, { ReactElement } from 'react';
import { Check, X, ShieldCheck, Zap, Server, Globe, Users, Clock, Database, ChevronDown, ChevronUp } from 'lucide-react';

interface IconProps {
  className?: string;
}

export const IconCheck = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Check className={className} />;
export const IconX = ({ className = "w-5 h-5" }: IconProps): ReactElement => <X className={className} />;
export const IconShield = ({ className = "w-5 h-5" }: IconProps): ReactElement => <ShieldCheck className={className} />;
export const IconZap = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Zap className={className} />;
export const IconServer = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Server className={className} />;
export const IconGlobe = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Globe className={className} />;
export const IconUsers = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Users className={className} />;
export const IconClock = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Clock className={className} />;
export const IconDatabase = ({ className = "w-5 h-5" }: IconProps): ReactElement => <Database className={className} />;
export const IconChevronDown = ({ className = "w-5 h-5" }: IconProps): ReactElement => <ChevronDown className={className} />;
export const IconChevronUp = ({ className = "w-5 h-5" }: IconProps): ReactElement => <ChevronUp className={className} />;
