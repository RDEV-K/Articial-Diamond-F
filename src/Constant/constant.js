import RoundShape from "../assets/Images/round_shape.svg";
import PrincessShape from "../assets/Images/princess_shape.svg";
import EmeraldShape from "../assets/Images/emerald_shape.svg";
import SquareEmeraldShape from "../assets/Images/square_emerald_shape.svg";
import RadiantShape from "../assets/Images/radiant_shape.svg";
import CushiontShape from "../assets/Images/cushion_shape.svg";
import PearShape from "../assets/Images/pear_shape.svg";
import MarquiseShape from "../assets/Images/marquise_shape.svg";
import HeartShape from "../assets/Images/heart_shape.svg";
import OvalShape from "../assets/Images/oval_shape.svg";
import AsscherShape from "../assets/Images/asscher_shape.svg";
import BaguetteShape from "../assets/Images/baguette_shape.svg";

const generateNumbers = (start, end, step) => {
  let children = [];
  for (let i = start; i <= end; i += step) {
    children.push({ text: i.toFixed(2),title: i.toFixed(2), value: i.toFixed(2), key: i.toFixed(2) });
  }
  return children;
};

export const SizeConstant = [
    {
      title: `0.20's`,
      text: `0.20's`,
      value: '0.20-0.29',
      key: '0.20-0.29',
      children: generateNumbers(0.20, 0.30, 0.01)
    },
    {
      title: `0.30's`,
        text: `0.30's`,
      value: '0.30-0.39',
      key: '0.30-0.39',
      children: generateNumbers(0.30, 0.40, 0.01)
    },
    {
      title: `0.40's`,
        text: `0.40's`,
      value: '0.40-0.49',
      key: '0.40-0.49',
      children: generateNumbers(0.40, 0.50, 0.01)
    },
    {
      title: `0.50's`,
        text: `0.50's`,
      value: '0.50-0.59',
      key: '0.50-0.59',
      children: generateNumbers(0.50, 0.60, 0.01)
    },
    {
      title: `0.60's`,
        text: `0.60's`,
      value: '0.60-0.69',
      key: '0.60-0.69',
      children: generateNumbers(0.60, 0.70, 0.01)
    },
    {
      title: `0.70's`,
        text: `0.70's`,
      value: '0.70-0.79',
      key: '0.70-0.79',
      children: generateNumbers(0.70, 0.79, 0.01)
    },
    {
      title: `0.80's`,
        text: `0.80's`,
      value: '0.80-0.89',
      key: '0.80-0.89',
      children: generateNumbers(0.80, 0.90, 0.01)
    },
    {
      title: `0.90's`,
        text: `0.90's`,
      value: '0.90-0.99',
      key: '0.90-0.99',
      children: generateNumbers(0.90, 0.99, 0.01)
    },
    {
      title: `1-1.19`,
        text: `1-1.19`,
      value: '1-1.19',
      key: '1-1.19',
      children: generateNumbers(1.00, 1.20, 0.01)
    },
    {
      title: `1.20-1.49`,
        text: `1.20-1.49`,
      value: '1.20-1.49`',
      key: '1.20-1.49`',
      children: generateNumbers(1.20, 1.50, 0.01)
    },
    {
      title: `1.50-1.79`,
        text: `1.50-1.79`,
      value: '1.50-1.79`',
      key: '1.50-1.79`',
      children: generateNumbers(1.50, 1.80, 0.01)
    },
    {
      title: `1.80-1.99`,
        text: `1.80-1.99`,
      value: '1.80-1.99`',
      key: '1.80-1.99`',
      children: generateNumbers(1.80, 1.99, 0.01)
    },
    {
      title: `2-2.49`,
        text: `2-2.49`,
      value: '2-2.49`',
      key: '2-2.49`',
      children: generateNumbers(2.00, 2.49, 0.01)
    },
    {
      title: `2.50-2.99`,
        text: `2.50-2.99`,
      value: '2.50-2.99`',
      key: '2.50-2.99`',
      children: generateNumbers(2.50, 2.99, 0.01)
    },
    {
      title: `3-3.99`,
        text: `3-3.99`,
      value: '3-3.99`',
      key: '3-3.99`',
      children: generateNumbers(3, 3.99, 0.01)
    },
    {
      title: `4-4.99`,
        text: `4-4.99`,
      value: '4-4.99`',
      key: '4-4.99`',
      children: generateNumbers(4, 4.99, 0.01)
    },
    {
        title: `5-9.99`,
        text: `5-9.99`,
        value: '5-9.99`',
        key: '5-9.99`',
        children: generateNumbers(5, 9.99, 0.01)
    },
    {
        title: `10-20`,
        text: `10-20`,
        value: '10-20`',
        key: '10-20`',
        children: generateNumbers(10, 20, 0.01)
    },
]

export const ShapeConstant = [
    {
        diamondUrl: RoundShape,
        diamondName: 'Round',
        diamondValue: 'Round'
    },
    {
        diamondUrl: PrincessShape,
        diamondName: 'Princess',
        diamondValue: 'Princess'
    },
    {
        diamondUrl: EmeraldShape,
        diamondName: 'Emerald',
        diamondValue: 'Emerald'
    },
    {
        diamondUrl: SquareEmeraldShape,
        diamondName: 'Squ.Eme.',
        diamondValue: 'Square Emerald'
    },
    {
        diamondUrl: RadiantShape,
        diamondName: 'Radiant',
        diamondValue: ['Radiant', 'Square Radiant']
    },
    {
        diamondUrl: CushiontShape,
        diamondName: 'Cushion',
        diamondValue: ['Cushion', 'Cushion Brilliant', 'Cushion Modified']
    },
    {
        diamondUrl: PearShape,
        diamondName: 'Pear',
        diamondValue: 'Pear'
    },
    {
        diamondUrl: MarquiseShape,
        diamondName: 'Marquise',
        diamondValue: 'Marquise'
    },
    {
        diamondUrl: HeartShape,
        diamondName: 'Heart',
        diamondValue: 'Heart'
    },
    {
        diamondUrl: OvalShape,
        diamondName: 'Oval',
        diamondValue: 'Oval'
    },
    {
        diamondUrl: AsscherShape,
        diamondName: 'Asscher',
        diamondValue: 'Asscher'
    },
    {
        diamondUrl: BaguetteShape,
        diamondName: 'Baguette',
        diamondValue: ['Baguette', 'Tapered Baguette']
    },
]

export const OPEN_INCLUSION_TABLE = {
    OT0: 'OT0',
    OT1: 'OT1',
    OT2: 'OT2',
    OT3: "OT3",
    OT4: "OT4"
}

export const OPEN_INCLUSION_CROWN = {
    OC0: 'OT0',
    OC1: 'OC1',
    OC2: 'OC2',
    OC3: "OC3",
    OC4: "OC4"
}

export const WHITE_INCLUSION_TABLE = {
    WT0: 'WT0',
    WT1: 'WT1',
    WT2: 'WT2',
    WT3: "WT3",
    WT4: "WT4"
}

export
const WHITE_INCLUSION_CROWN = {
    WC0: 'WC0',
    WC1: 'WC1',
    WC2: 'WC2',
    WC3: "WC3",
    WC4: "WC4"
}

export const BLACK_INCLUSION_TABLE = {
    BT0: 'BT0',
    BT1: 'BT1',
    BT2: 'BT2',
    BT3: "BT3",
    BT4: "BT4"
}

export const BLACK_INCLUSION_CROWN = {
    BC0: 'BC0',
    BC1: 'BC1',
    BC2: 'BC2',
    BC3: "BC3",
    BC4: "BC4"
}

export const EYECLEAN = {
    EC0: 'EC0',
    EC1: 'EC1',
    EC2: 'EC2',
}
