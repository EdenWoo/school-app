import {
  AcademicCapIcon,
  AtSymbolIcon,
  MapIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/outline"
import { getFullAddress, School } from "./Index"

interface Props {
  school: School
}

const divider = () => (
  <div className="flex">
    <div className="m-auto md:h-3 border-r-2 border-gray-500"></div>
  </div>
)

const SchoolItem = ({ school }: Props) => {
  return (
    <>
      <div className="rounded-lg shadow-lg bg-white p-4">
        <div className="">
          <div className="flex gap-2">
            <div className="flex">
              <AcademicCapIcon className="m-auto h-5 w-5 text-blue-500" />
            </div>
            <div className="flex">
              <a
                className="m-auto text-blue-500 cursor-pointer hover:text-blue-500 hover:underline text-lg"
                target="_blank"
                href={school.URL}
              >
                {school?.Org_Name}
              </a>
            </div>
          </div>
        </div>
        <div className="py-4 md:flex gap-4">
          <div className="flex gap-1 text-gray-500">
            <div className="flex">
              <MapIcon className="m-auto h-4 w-4" />
            </div>
            <div className="flex">
              <div className="m-auto">{getFullAddress(school)}</div>
            </div>
          </div>
          {school.Email && (
            <div className="flex gap-1 text-gray-500">
              <div className="flex">
                <AtSymbolIcon className="m-auto h-4 w-4" />
              </div>
              <div className="flex">
                <div className="m-auto">{school.Email}</div>
              </div>
            </div>
          )}
          {school?.Telephone && (
            <div className="flex gap-1 text-gray-500">
              <div className="flex">
                <PhoneIcon className="m-auto h-4 w-4" />
              </div>
              <div className="flex">
                <div className="m-auto">{school.Telephone}</div>
              </div>
            </div>
          )}
          {school?.Contact1_Name && (
            <div className="flex gap-1 text-gray-500">
              <div className="flex">
                <UserIcon className="m-auto h-4 w-4" />
              </div>
              <div className="flex">
                <div className="m-auto">{school.Contact1_Name}</div>
              </div>
            </div>
          )}
        </div>
        <div className="text-gray-500 md:flex gap-2">
          <div>Students: {school.Total} </div>
          {divider()}
          <div>International: {school.International} </div>
          {divider()}
          <div>European: {school.European} </div>
          {divider()}
          <div>Pacific: {school.Pacific} </div>
          {divider()}
          <div>Asian: {school.Asian} </div>
          {divider()}
          <div>Other: {school.Other} </div>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="inline-block bg-gray-200 rounded-full px-3 text-gray-700 text-sm py-0.5">
            {school.CoEd_Status}
          </div>
          <div className="inline-block bg-gray-200 rounded-full px-3 text-gray-700 text-sm py-0.5">
            {school.Org_Type}
          </div>
          {school.Decile && (
            <div className="inline-block bg-gray-200 rounded-full px-3 text-gray-700 text-sm py-0.5">
              Decile {school.Decile}
            </div>
          )}
          {school.Definition && (
            <div className="inline-block bg-gray-200 rounded-full px-3 text-gray-700 text-sm py-0.5">
              {school.Definition}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SchoolItem
