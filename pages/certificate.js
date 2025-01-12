// pages/index.js
import Image from "next/image";

export default function certificate() {
  return (
    <div className="bg-[#DEEDEF] p-5">
      {/* Header */}
      <h1 className="text-[#2E414B] text-center text-4xl font-semibold mb-10 pt-10">
        Certificates
      </h1>

      {/* Certificates Section */}
      <div className="flex justify-between">
        <div>
          <Image
            src="/certificates/c1.png"
            alt="Certificate 1"
            width={400}
            height={400}
          />
        </div>
        <div>
          <Image
            src="/certificates/c2.png"
            alt="Certificate 2"
            width={400}
            height={400}
          />
        </div>
        <div>
          <Image
            src="/certificates/c3.png"
            alt="Certificate 3"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
