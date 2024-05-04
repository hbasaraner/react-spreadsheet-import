import { Select } from "chakra-react-select"
import type { SelectOption } from "../../types"
import { customComponents } from "./MenuPortal"
import { useStyleConfig } from "@chakra-ui/react"
import type { Styles } from "../../steps/MatchColumnsStep/components/ColumnGrid"
import { useRsi } from "../../hooks/useRsi"
interface Props {
  onChange: (value: SelectOption | null) => void
  value?: SelectOption
  options: readonly SelectOption[]
  placeholder?: string
  name?: string
}

export const MatchColumnSelect = ({ onChange, value, options, placeholder, name }: Props) => {
  const styles = useStyleConfig("MatchColumnsStep") as Styles
  const { customMatchSelectComponent } = useRsi()

  return (
    <>
      {customMatchSelectComponent ? (
        customMatchSelectComponent({ value, onChange, options, placeholder, name })
      ) : (
        <Select<SelectOption, false>
          value={value || null}
          isSearchable
          colorScheme="gray"
          useBasicStyles
          onChange={onChange}
          placeholder={placeholder}
          options={options}
          chakraStyles={styles.select}
          menuPosition="fixed"
          components={customComponents}
          aria-label={name}
        />
      )}
    </>
  )
}
