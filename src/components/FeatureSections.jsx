import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import banner from '../assets/images/banner.png'

const features = [
  {
    name: 'Push to Deploy :',
    description:
      'Choose from our collection of projects, and deploy them instantly with just a click. No complex setup required—just pure innovation ready to go live.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Secure Payments with Razorpay :',
    description: 'Make your purchases with confidence, knowing that all payments are securely processed through Razorpay.',
    icon: LockClosedIcon,
  },
  {
    name: 'Instant Access to Software :',
    description: 'Once your payment is complete, you get immediate access to the project files, documentation, and setup instructions.',
    icon: ServerIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Streamline Your Workflow
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
              ProjectVerse offers a comprehensive platform for tech enthusiasts and developers to discover and purchase a wide variety of innovative tech projects, built and deployed by our team.
              </p>
              <dl className="mt-8 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            alt="Product screenshot"
            src={ banner }
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}
