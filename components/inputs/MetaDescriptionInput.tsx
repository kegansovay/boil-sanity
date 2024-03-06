import {Stack, Text} from '@sanity/ui'
import {StringInputProps} from 'sanity'

export function MetaDescriptionInput(props: StringInputProps) {
  return (
    <Stack space={3}>
      <Text size={1}>Character Count: {props.value?.length ? props.value.length : '0'}/160</Text>
      {props.renderDefault(props)}
    </Stack>
  )
}
