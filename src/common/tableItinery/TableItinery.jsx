/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { TABLE_HEAD, TABLE_ROWS, TABS } from "../../utils/constant";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  PencilIcon,
  RocketLaunchIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

export const TableItinery = ({ itineraries }) => {
  const TABLE_Itinearary = itineraries;
  console.log(">->->->->->->ITINERARIO. \n", itineraries);

  const banknotes = (price) => {
    const banks = [];
    for (let i = 0; i < price; i++) {
      banks.push(<BanknotesIcon key={i} color="green" className="w-6" />);
    }
    return banks;
  };

  const horas = (minutos) => (minutos / 60).toPrecision(2).toString();

  const getColorByDuration = (duration) => {
    if (duration <= 60) {
      return "green-400";
    } else if (duration > 60 && duration <= 160) {
      return "lime-400";
    } else if (duration > 160 && duration <= 260) {
      return "yellow-300";
    } else if (duration > 260 && duration <= 460) {
      return "orange-400";
    } else {
      return "red-500";
    }
  };

  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h3" color="blue-gray">
              Itinearies list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all departures and excursions.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button variant="outlined" size="sm">
              view all
            </Button>
            <Button className="flex items-center gap-3" size="sm">
              <RocketLaunchIcon strokeWidth={2} className="h-4 w-4" /> Add
              Itinery
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Tabs value="all" className="w-full md:w-max">
            <TabsHeader>
              {TABS.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  &nbsp;&nbsp;{label}&nbsp;&nbsp;
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          <div className="w-full md:w-72">
            <Input
              label="Search"
              icon={<MagnifyingGlassIcon className="h-5 w-5" />}
            />
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_Itinearary.map(
              (
                {
                  nameItinerary,
                  price,
                  duration,
                  hashtags,
                  agent,
                  commentaries,
                },
                index
              ) => {
                console.log(">>>>>>>>>>>> A-G-E-N-T-E \n", agent);
                console.log("-------> comentarios---> \n", commentaries);

                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <>
                    <tr className="order-b border-success-200 bg-success text-neutral-800 ">
                      <td
                        colSpan="5"
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        <Typography variant="h4">{nameItinerary}</Typography>
                      </td>
                    </tr>
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={agent.photoUrl} alt={name} size="sm" />
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {agent.namePeople}
                            </Typography>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {agent.email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-row flex-wrap w-[80px]">
                          {price === 0 ? (
                            <img
                              src="https://us.123rf.com/450wm/ahasoft2000/ahasoft20001703/ahasoft2000170301122/73923156-icono-de-trama-de-etiqueta-gratuita-s%C3%ADmbolo-plano-con-gradiente-pictogram-est%C3%A1-aislado-en-un-fondo.jpg"
                              alt=""
                            />
                          ) : (
                            banknotes(price)
                          )}
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={`${horas(duration)} hs`}
                            color={`${getColorByDuration(duration)}`}
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div>
                          {hashtags.map((tag, index) => (
                            <Typography
                              key={index}
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {`#${tag}`}
                            </Typography>
                          ))}
                        </div>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text">
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  </>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

TableItinery.propTypes = {
  itineraries: PropTypes.object,
};
