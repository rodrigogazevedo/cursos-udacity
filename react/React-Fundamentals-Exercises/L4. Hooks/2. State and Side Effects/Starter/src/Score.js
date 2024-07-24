const Score = ({ numeroCorreto, numeroQuestoes }) => {
  return (
    <p className="text">
      Sua pontuação: {numeroCorreto}/{numeroQuestoes}
    </p>
  )
}

export default Score;