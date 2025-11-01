"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  select,
  selectContent,
  selectItem,
  selectTrigger,
  selectValue
} from "@/components/ui/select" // huruf kecil!

export default function CreateAPI() {
  const [apiName, setApiName] = useState("")
  const [apiDescription, setApiDescription] = useState("")
  const [apiType, setApiType] = useState("rest")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ apiName, apiDescription, apiType })
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Create New API</h2>
      <form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
        <div>
          <label htmlFor="apiName" className="block mb-2">
            API Name
          </label>
          <Input
            id="apiName"
            value={apiName}
            onChange={(e) => setApiName(e.target.value)}
            placeholder="Enter API name"
            required
          />
        </div>
        <div>
          <label htmlFor="apiDescription" className="block mb-2">
            API Description
          </label>
          <Textarea
            id="apiDescription"
            value={apiDescription}
            onChange={(e) => setApiDescription(e.target.value)}
            placeholder="Describe your API"
            required
          />
        </div>
        <div>
          <label htmlFor="apiType" className="block mb-2">
            API Type
          </label>
          <select value={apiType} onValueChange={setApiType}>
            <selectTrigger>
              <selectValue placeholder="select API type" />
            <selectTrigger>
            <selectContent>
              <selectItem value="rest">REST</selectItem>
              <selectItem value="graphql">GraphQL</selectItem>
              <selectItem value="soap">SOAP</selectItem>
            </selectContent>
          </select>
        </div>
        <Button type="submit">Create API</Button>
      </form>
    </div>
  )
}
