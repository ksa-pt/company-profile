export default function TopBar({ email }) {
  return (
    <div className="border-b-8 border-blue-600">
      <div className="container mx-auto  text-sm py-4 flex justify-between">
        <div>
          <img className="w-[125px]" src="/assets/logo.png" alt="logo" />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-semibold text-blue-500 font-bold">Customer Email</p>
          <p className="text-gray-500">{email}</p>
        </div>
      </div>
    </div>
  );
}
