export const CVV_LENGTH = 3;
export const CVV_FORMAT = /^(\s*|\d+)$/;
export const DEFAULT_CARD_LENGTH = 16;
export const CARD_FORMAT = /^(\s*|\d+)$/;
export const CARD_RANGES = {
  mastercard: [51, 52, 53, 54, 55]
};

export const CARD_TYPES = {
  visa: {
    name: 'visa',
    color: 'lime'
  },
  mastercard: {
    name: 'mastercard',
    color: 'lightblue'
  }
};
