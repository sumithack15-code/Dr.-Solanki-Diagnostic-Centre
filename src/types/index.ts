export interface DiagnosticService {
  id: string;
  name: string;
  category: 'Radiology' | 'Pathology' | 'Cardiology';
  shortDescription: string;
  detailedOverview: string;
  preparationNotes: string[];
  fastingRequired?: boolean;
  typicalDuration?: string;
  iconName: string;
  imageUrl?: string;
}

export interface Doctor {
  id: string;
  name: string;
  degrees: string;
  role: string;
  department: string;
  summary: string;
  focusAreas: string[];
  gender: 'female' | 'male';
}

export interface EnquiryFormData {
  fullName: string;
  phoneNumber: string;
  serviceId: string;
  preferredDate: string;
  preferredTimeWindow?: string;
  message?: string;
}

export interface ServicePreparation {
  serviceName: string;
  fastingAdvice: string;
  preparationSteps: string[];
  documentsToCarry: string[];
}
