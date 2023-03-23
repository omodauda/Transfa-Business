import { Order, Rider, RiderStatus } from "~types"

/* eslint-disable global-require */
const BIKES: Rider[] = [
  {
    id: '1',
    registrationNo: 'LAG 1234FG',
    status: RiderStatus.active,
    fullname: 'Stone Cold',
    phone: '+2348141637335',
    image: require("../../assets/rider.png")
  },
  {
    id: '2',
    registrationNo: 'LAG 1234FG',
    status: RiderStatus.active,
    fullname: 'Stone Cold',
    phone: '+2348141637335',
    image: require("../../assets/rider.png")
  },
  {
    id: '3',
    registrationNo: 'LAG 1234FG',
    status: RiderStatus.active,
    fullname: 'Stone Cold',
    phone: '+2348141637335',
    image: require("../../assets/rider.png")
  },
  {
    id: '4',
    registrationNo: 'LAG 1234FG',
    status: RiderStatus.active,
    fullname: 'Stone Cold',
    phone: '+2348141637335',
    image: require("../../assets/rider.png")
  },
  {
    id: '5',
    registrationNo: 'LAG 1234FG',
    status: RiderStatus.active,
    fullname: 'Stone Cold',
    phone: '+2348141637335',
    image: require("../../assets/rider.png")
  }
]

const ORDERS: Order[] = [
  {
    id: '1',
    rider: {
      id: '4',
      registrationNo: 'LAG 1234FG',
      status: RiderStatus.active,
      fullname: 'Stone Cold',
      phone: '+2348141637335',
      image: require("../../assets/rider.png")
    },
    amount: 4000
  },
  {
    id: '2',
    rider: {
      id: '4',
      registrationNo: 'LAG 1234FG',
      status: RiderStatus.active,
      fullname: 'Stone Cold',
      phone: '+2348141637335',
      image: require("../../assets/rider.png")
    },
    amount: 10000
  },
  {
    id: '3',
    rider: {
      id: '4',
      registrationNo: 'LAG 1234FG',
      status: RiderStatus.active,
      fullname: 'Stone Cold',
      phone: '+2348141637335',
      image: require("../../assets/rider.png")
    },
    amount: 4000
  },
  {
    id: '4',
    rider: {
      id: '4',
      registrationNo: 'LAG 1234FG',
      status: RiderStatus.active,
      fullname: 'Stone Cold',
      phone: '+2348141637335',
      image: require("../../assets/rider.png")
    },
    amount: 1500
  }
]

export { BIKES, ORDERS }